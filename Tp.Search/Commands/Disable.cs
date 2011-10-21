using System.Linq;
using Tp.Integration.Messages.Commands;
using Tp.Integration.Messages.PluginLifecycle;
using Tp.Integration.Messages.PluginLifecycle.PluginCommand;
using Tp.Integration.Plugin.Common.Storage;

namespace Tp.Search.Commands
{
    public class Disable : IPluginCommand
    {
        private readonly IPluginContext _pluginContext;
        private readonly IPluginProfileRepository _repository;

        public Disable(IPluginProfileRepository repository, IPluginContext pluginContext)
        {
            _repository = repository;
            _pluginContext = pluginContext;
        }

        #region IPluginCommand Members

        public PluginCommandResponseMessage Execute(string args)
        {
            foreach (var pluginProfile in _repository.GetBy(_pluginContext.AccountName))
            {
                _repository.DeletePluginProfile(_pluginContext.AccountName, pluginProfile.Name);
            }

            return new PluginCommandResponseMessage
                       {PluginCommandStatus = PluginCommandStatus.Succeed, ResponseData = string.Format("{{}}")};
        }

        public string Name
        {
            get { return "Disable"; }
        }

        #endregion
    }
}