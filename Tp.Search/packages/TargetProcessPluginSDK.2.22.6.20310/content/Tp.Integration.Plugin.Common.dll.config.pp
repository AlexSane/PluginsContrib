<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <configSections>
    <section name="log4net" type="log4net.Config.Log4NetConfigurationSectionHandler,log4net" />
    <section name="Logging" type="NServiceBus.Config.Logging, NServiceBus.Core" />
    <sectionGroup name="applicationSettings" type="System.Configuration.ApplicationSettingsGroup, System, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089">
      <section name="Tp.Integration.Plugin.Common.Properties.Settings" type="System.Configuration.ClientSettingsSection, System, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" requirePermission="false" />
    </sectionGroup>
  </configSections>
  <Logging Threshold="All" />
  <log4net>
    <appender name="PluginFileLog" type="log4net.Appender.RollingFileAppender">
      <file value="Logs/Plugin.txt" />
      <appendToFile value="true" />
      <rollingStyle value="Size" />
      <maxSizeRollBackups value="3" />
      <maximumFileSize value="1000KB" />
      <staticLogFileName value="true" />
      <layout type="log4net.Layout.PatternLayout">
        <conversionPattern value="%date [%thread] %-5level %logger - %message%newline" />
      </layout>
      <lockingModel type="log4net.Appender.FileAppender+MinimalLock" />
    </appender>
    <appender name="console" type="log4net.Appender.ConsoleAppender">
      <layout type="log4net.Layout.PatternLayout">
        <param name="ConversionPattern" value="%d [%t] %-5p %c [%x] &lt;%X{auth}&gt; - %m%n" />
      </layout>
    </appender>
    <root>
      <level value="INFO" />
      <appender-ref ref="PluginFileLog" />
      <appender-ref ref="console" />
    </root>
  </log4net>
  <applicationSettings>
    <Tp.Integration.Plugin.Common.Properties.Settings>
      <setting name="TargetProcessPath" serializeAs="String">
        <value>http://localhost/TargetProcess</value>
      </setting>
      <setting name="AdminLogin" serializeAs="String">
        <value>admin</value>
      </setting>
      <setting name="AdminPassword" serializeAs="String">
        <value>admin</value>
      </setting>
      <setting name="TargetProcessInputQueue" serializeAs="String">
        <value>Tp.InputCommand</value>
      </setting>
      <setting name="pluginDatabaseConnectionString" serializeAs="String">
        <value>Data Source=(local);Initial Catalog=TargetProcess;user id=sa;password=sa</value>
      </setting>
      <setting name="PluginInputQueue" serializeAs="String">
        <value>Tp.MyPlugin</value>
      </setting>
    </Tp.Integration.Plugin.Common.Properties.Settings>
  </applicationSettings>
</configuration>