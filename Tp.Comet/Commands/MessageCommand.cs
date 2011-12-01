using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Tp.Comet.Dto;
using Tp.Integration.Messages.Commands;
using Tp.Integration.Messages.PluginLifecycle.PluginCommand;
using Tp.Integration.Plugin.Common;
using Tp.Integration.Plugin.Common.PluginCommand.Embedded;

namespace Tp.Comet.Commands
{
    public class MessageCommand : IPluginCommand
    {
    	private readonly ITpBus _bus;

    	public MessageCommand(ITpBus bus)
    	{
    		_bus = bus;
    	}

    	public PluginCommandResponseMessage Execute(string args)
        {
            var msg = args.Deserialize<Message>();

            SubscriberRepository.AddMessage(msg, _bus);


            return new PluginCommandResponseMessage() {PluginCommandStatus = PluginCommandStatus.Succeed};
        }

        public string Name
        {
            get { return "Message"; }
        }
    }
}
