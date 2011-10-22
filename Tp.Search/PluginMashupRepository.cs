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
								// TODO TP should preserve extensions and folders layout
                                //@".\Mashups\TPSearch\style.css",
                                //@".\Mashups\TPSearch\images\ui-bg_flat_0_aaaaaa_40x100.png",
                                @".\Mashups\TPSearch\TPSearch.js",
                                @".\Mashups\TPSearch\Commands.js",
                                @".\Mashups\TPSearch\SearchResults.js",
                                @".\Mashups\TPSearch\SearchResultsItem.js",
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