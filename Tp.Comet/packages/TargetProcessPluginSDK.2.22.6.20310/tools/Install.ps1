param($rootPath, $toolsPath, $package, $project)

$project.ProjectItems.Item("Tp.Integration.Plugin.Common.dll.config").Properties.Item("CopyToOutputDirectory").Value = 2