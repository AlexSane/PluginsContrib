using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Tp.Comet.Dto;
using Tp.Integration.Messages.Commands;
using Tp.Integration.Messages.PluginLifecycle.PluginCommand;
using Tp.Integration.Plugin.Common.PluginCommand.Embedded;

namespace Tp.Comet.Commands
{
    public class MessageCommand : IPluginCommand
    {
        public PluginCommandResponseMessage Execute(string args)
        {
            var msg = args.Deserialize<Message>();

            SubscriberRepository.AddMessage(msg);

            return new PluginCommandResponseMessage() {PluginCommandStatus = PluginCommandStatus.Succeed};
        }

        public string Name
        {
            get { return "Message"; }
        }
    }
}
