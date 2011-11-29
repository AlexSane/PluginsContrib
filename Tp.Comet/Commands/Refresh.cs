using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Tp.Integration.Messages.Commands;
using Tp.Integration.Messages.PluginLifecycle.PluginCommand;

namespace Tp.Comet.Commands
{
    public class Refresh : IPluginCommand
    {
        public PluginCommandResponseMessage Execute(string args)
        {
            throw new NotImplementedException();
        }

        public string Name
        {
            get { return "Refresh"; }
        }
    }
}
