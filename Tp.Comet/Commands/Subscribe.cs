using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Tp.Integration.Messages.Commands;
using Tp.Integration.Messages.PluginLifecycle.PluginCommand;

namespace Tp.Comet.Commands
{
    public class Subscribe : IPluginCommand
    {
        public PluginCommandResponseMessage Execute(string args)
        {
            var subscriberId = new Guid();
//var subscribers = new ConcurrentDictionary<string, object>();
            return new PluginCommandResponseMessage() {PluginCommandStatus = PluginCommandStatus.Succeed, ResponseData = subscriberId.ToString()};
        }

        public string Name
        {
            get { return "Subscribe"; }
        }
    }
}
