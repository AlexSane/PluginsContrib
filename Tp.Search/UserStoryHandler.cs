using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using hOOt;
using NServiceBus;
using Tp.Integration.Common;
using Tp.Integration.Messages.EntityLifecycle.Messages;
using Tp.Integration.Plugin.Common.Storage;

namespace Tp.Search
{
    public class UserStoryHandler : IHandleMessages<UserStoryCreatedMessage>
    {
    	private readonly IPluginContext _pluginContext;

    	public UserStoryHandler(IPluginContext pluginContext)
		{
			_pluginContext = pluginContext;
		}

        public void Handle(UserStoryCreatedMessage message)
        {
        	var accountName = _pluginContext.AccountName.Value;
        	Hoot hoot = IndexHolder.GetStorage(accountName);

        	hoot.Index(message.Dto.ID.Value, message.Dto.Description);
			hoot.OptimizeIndex();
			hoot.Save();
			
        }
    }
}
