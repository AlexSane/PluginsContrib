using System.Linq;
using Tp.Integration.Messages.Commands;
using Tp.Integration.Messages.PluginLifecycle;
using Tp.Integration.Messages.PluginLifecycle.PluginCommand;
using Tp.Integration.Plugin.Common.Storage;

namespace Tp.Search.Commands
{
    public class Enable : IPluginCommand
    {
        private readonly IPluginContext _pluginContext;
        private readonly IPluginProfileRepository _repository;

        public Enable(IPluginProfileRepository repository, IPluginContext pluginContext)
        {
            _repository = repository;
            _pluginContext = pluginContext;
        }

        #region IPluginCommand Members

        public PluginCommandResponseMessage Execute(string args)
        {
            if (_repository.GetBy(_pluginContext.AccountName).Count() == 0)
            {
                _repository.AddPluginProfile(_pluginContext.AccountName,
                                             new PluginProfileDto {Name = "Enabled", Settings = new SearcherProfile()});
            }

            return new PluginCommandResponseMessage
                       {PluginCommandStatus = PluginCommandStatus.Succeed, ResponseData = string.Format("{{}}")};
        }

        public string Name
        {
            get { return "Enable"; }
        }

        #endregion
    }
}