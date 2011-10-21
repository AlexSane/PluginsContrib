// 
// Copyright (c) 2005-2011 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 

using StructureMap.Configuration.DSL;
using Tp.Integration.Plugin.Common.Mashup;
using Tp.Search;

namespace Tp.PopEmailIntegration.StructureMap
{
	public class TPSearchPluginRegistry : Registry
	{
		public TPSearchPluginRegistry()
		{
			For<IPluginMashupRepository>().HybridHttpOrThreadLocalScoped().Use<PluginMashupRepository>();
		}
	}
}