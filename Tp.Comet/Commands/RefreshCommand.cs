using System;
using System.Linq;
using System.Text;
using System.Threading;
using Tp.Comet.Dto;
using Tp.Integration.Messages.Commands;
using Tp.Integration.Messages.PluginLifecycle.PluginCommand;
using Tp.Integration.Plugin.Common.PluginCommand.Embedded;

namespace Tp.Comet.Commands
{
    public class RefreshCommand : IPluginCommand
    {
        public PluginCommandResponseMessage Execute(string args)
        {
            var guid = new Guid(args);
            var subscriber = SubscriberRepository.GetSubscriber(guid);
            var response = new PluginCommandResponseMessage() { PluginCommandStatus = PluginCommandStatus.Succeed, ResponseData = subscriber.Serialize() };
            
            subscriber.Messages.Clear();
            
            return response;
        }

        public string Name
        {
            get { return "Refresh"; }
        }
    }
}
