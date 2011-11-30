using System.Collections.Generic;
using System.Linq;
using System.Text;
using Tp.Comet.Dto;
using Tp.Integration.Messages.Commands;
using Tp.Integration.Messages.PluginLifecycle.PluginCommand;
using Tp.Integration.Plugin.Common.PluginCommand.Embedded;

namespace Tp.Comet.Commands
{
    public class SubscribeCommand : IPluginCommand
    {
        public PluginCommandResponseMessage Execute(string args)
        {
            var subscriber = new Subscriber(args);

            SubscriberRepository.AddSubscriber(subscriber);

            return new PluginCommandResponseMessage {PluginCommandStatus = PluginCommandStatus.Succeed, ResponseData = subscriber.Serialize()};
        }

        public string Name
        {
            get { return "Subscribe"; }
        }
    }
}
