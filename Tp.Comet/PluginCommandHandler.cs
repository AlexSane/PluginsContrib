using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using log4net;
using NServiceBus;
using Tp.Comet.Commands;
using Tp.Integration.Messages.Commands;
using Tp.Integration.Plugin.Common;
using Tp.Integration.Plugin.Common.Logging;
using Tp.Integration.Plugin.Common.PluginCommand;
using Tp.Integration.Plugin.Common.PluginCommand.Embedded;
using Tp.Integration.Plugin.Common.Storage;
using Tp.Integration.Plugin.Common.Validation;
using Timer = System.Timers.Timer;

namespace Tp.Comet
{
	public class PluginCommandHandler : IHandleMessages<ExecutePluginCommandCommand>
	{
		private readonly ITpBus _tpBus;
		private readonly IPluginCommandRepository _pluginCommandRepository;
		private readonly IBus _bus;

		private readonly ILog _log;

		public PluginCommandHandler(ITpBus tpBus, IPluginCommandRepository pluginCommandRepository, ILogManager logManager, IBus bus)
		{
			_tpBus = tpBus;
			_pluginCommandRepository = pluginCommandRepository;
			_bus = bus;
			_log = logManager.GetLogger(GetType());
		}

		public void Handle(ExecutePluginCommandCommand message)
		{
			if (message.CommandName != RefreshCommand.NAME)
			{
				return;
			}
			
			var commandsToExecute = _pluginCommandRepository.Where(x => x.Name == message.CommandName).ToArray();
			if (commandsToExecute.Count() == 1)
			{
				_tpBus.DoNotContinueDispatchingCurrentMessageToHandlers();

				var guid = new Guid(message.Arguments);
				var subscriber = SubscriberRepository.GetSubscriber(guid);

				if (subscriber.Messages.Count > 0)
				{
					var response = new PluginCommandResponseMessage() { PluginCommandStatus = PluginCommandStatus.Succeed, ResponseData = subscriber.Serialize() };
					subscriber.Messages.Clear();
					_tpBus.Reply(response);
					return;
				}

				subscriber.LastMessageId = _bus.CurrentMessageContext.Id;
				subscriber.ReturnAddress= _bus.CurrentMessageContext.ReturnAddress.Replace("@", "ui@");
			}
		}
	}
}

