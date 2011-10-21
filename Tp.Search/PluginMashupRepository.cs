// 
// Copyright (c) 2005-2011 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 
using Tp.Integration.Plugin.Common.Mashup;

namespace Tp.Search
{
	public class PluginMashupRepository : IPluginMashupRepository
	{
		public PluginMashup[] PluginMashups
		{
			get
			{
				return new[] {
                    new PluginMashup("TPSearch", 
                        new[]   {
                                @".\Mashups\TPSearch\TPSearch.js",
                                @".\Mashups\TPSearch\TPSearchCommands.js",
                                @".\Mashups\TPSearch\jquery.ui.autocomplete.html.js"
			                    },
                        new[]   {
			                    "footerPlaceholder"
			                    }), 
					new PluginProfileEditorMashup(new[]
						{
							@".\Mashups\ProfileEditor\TPSearchEditor.js",
							@".\Mashups\ProfileEditor\tmpl.js"
						})
				};
			}
		}
	}
}