//If you rename or remove this file, it will be re-created during package update.
tau.mashups.addMashup(function (config) {
	// define profile editor 
	function twitterProfileEditor(config) {
		this._create(config);
	}
	twitterProfileEditor.prototype = {
		template: null,
		placeHolder: null,
		saveBtn: null,
		_returnUrl: null,
		_create: function (config) {
			this.placeHolder = config.placeHolder;
			this.repository = config.profileRepository;
			this._returnUrl = 'javascript:window.history.back()';
			this.template = '<div>' +
                        '<form method="POST">' +
                        '<h2 class="h2">Twitter</h2>' +
                        '<p class="note">Tweets when new user story is added.</p>' +
                        '<div class="twitter-settings">' +
                        '    <div class="pad-box">' +
                        '        <p class="label">Profile Name<br />' +
                        '        <input id="profileNameTextBox" type="text" name="Name" class="input" style="width: 275px;" value="${Name}" />' +
                        '    </div>' +
                        '    <div class="pad-box">' +
                        '        <p class="label pt-10">Twitter Account Name</p>' +
                        '        <input id="twitterAccountTextBox" name="TwitterAccount" value="${Settings.TwitterAccount}" type="text" class="input" style="width: 275px;" value="{Type Twitter account}" />' +
                        '        <p class="label">Access Token<br>' +
                        '       <input id="twitterAccessTokenTextBox" name="TwitterAccessTokenTextBox" value="${Settings.TwitterAccessToken}" type="password" class="input" style="width: 275px;" value="{Paste Access Token}" /></p>' +
                        '        <p class="label">Access Token Secret<br>' +
                        '       <input id="twitterAccessTokenSecretTextBox" name="TwitterAccessTokenSecretTextBox" value="${Settings.TwitterAccessTokenSecret}" type="password" class="input" style="width: 275px;" value="{Paste Access Token Secret. Ask all to close their eyes}" /></p>' +
                        '    </div>' +
                        '</div>' +
                        '<div class="save-block">' +
                        '    <a href="javascript:void(0);" id="saveButton" class="button">Save & Exit</a>' +
                        '    <a href="' + this._returnUrl + '">Cancel</a>' +
                        '</div>' +
                        '</form>' +
                        '</div>';
		},
		// this is the main method.
		// It loads plugin profile data and register callback that will be executed after profile initialization
		render: function () {
			// getByName loads plugin profile data
			this.repository.getByName(this._getEditingProfileName(), $.proxy(this._renderProfile, this));
		},
		_getEditingProfileName: function () {
			return new Tp.URL(window.location.href).getArgumentValue('ProfileName');
		},
		// render profile UI into placeholder and enable Save button
		_renderProfile: function (profile) {
			profile = profile || { Name: null, Settings: { TwitterAccount: null, TwitterAccessToken: null, TwitterAccessTokenSecret: null} };
			this.placeHolder.html('');
			$.tmpl(this.template, profile).appendTo(this.placeHolder);
			this.saveBtn = this.placeHolder.find('#saveButton');
			this.saveBtn.click($.proxy(this._saveProfile, this));
		},
		// save twitter profile using repository update method
		_saveProfile: function () {
			var profile =
                {
                	Name: this.placeHolder.find('#profileNameTextBox').val(),
                	Settings:
                    {
                    	TwitterAccount: this.placeHolder.find('#twitterAccountTextBox').val(),
                    	TwitterAccessToken: this.placeHolder.find('#twitterAccessTokenTextBox').val(),
                    	TwitterAccessTokenSecret: this.placeHolder.find('#twitterAccessTokenSecretTextBox').val()
                    }
                };
			this.repository.update(this._getEditingProfileName(), profile, $.proxy(this._onProfileSaved, this));
		},
		// redirect to Plugins list after profile save
		_onProfileSaved: function () {
			window.location.href = this._returnUrl;
		}
	};

	function profileRepository(config) {
		this._create(config);
	};
	profileRepository.prototype = {
		_requestUrlBase: '/api/v1/Plugins/{PluginName}/Profiles/{ProfileName}',
		_pluginName: null,
		_create: function () {
			var url = new Tp.URL(location.href);
			this._pluginName = url.getArgumentValue('PluginName');
		},
		_getUrl: function (profileName) {
			var relativeUrl = this._requestUrlBase.replace(/{PluginName}/g, this._pluginName).replace(/{ProfileName}/g, profileName);
			return new Tp.WebServiceURL(relativeUrl).url;
		},
		getByName: function (profileName, success) {
			if (profileName) {
				$.getJSON(this._getUrl(profileName), success);
			} else {
				success(null);
			}
		},
		_post: function (profileName, data, success, error) {
			$.ajax({
				url: this._getUrl(profileName),
				data: JSON.stringify(data),
				success: success,
				error: function (response) {
					error(JSON.parse(response.responseText));
				},
				type: 'POST',
				dataType: "json"
			});
		},
		create: function (data, success, error) {
			this._post('', data, success, error);
		},
		update: function (profileName, data, success, error) {
			this._post(profileName, data, success, error);
		}
	};
	
	// Instantiate twitterProfileEditor and run render method.
	new twitterProfileEditor({
		placeHolder: $('#' + config.placeholderId),
		profileRepository: new profileRepository()
	}).render();
})