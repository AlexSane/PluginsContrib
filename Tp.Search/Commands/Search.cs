using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using Tp.Integration.Messages.Commands;
using Tp.Integration.Messages.PluginLifecycle.PluginCommand;
using Tp.Integration.Plugin.Common.Storage;
using Tp.Integration.Plugin.Common.PluginCommand.Embedded;

namespace Tp.Search.Commands
{
	[DataContract]
	public class SearchResult
	{
		[DataMember]
		public string SearchString { get; set; }
		[DataMember]
		public int[] Items { get; set; }
	}

	public class Search : IPluginCommand
	{
		private readonly IPluginContext _pluginContext;

		public Search(IPluginContext pluginContext)
		{
			_pluginContext = pluginContext;
		}

		public PluginCommandResponseMessage Execute(string args)
		{
			var rows = IndexHolder.GetStorage(_pluginContext.AccountName.Value).FindRows(args);
			return new PluginCommandResponseMessage()
			{
				ResponseData = new SearchResult() { SearchString = args, Items = rows.ToArray() }.Serialize()
			};
		}

		public string Name
		{
			get { return "Search"; }
		}
	}
}
