/*
based on Mastering Web Application Development with AngularJS
*/

var loginDialog = null;
function openLoginDialog() {
	if ( !loginDialog) {
		loginDialog = $dialog.dialog();
		loginDialog.open (
			'security/login/form.tpl.html',
			'LoginFormController')
    	.then(onLoginDialogClose);
	} 
}
function closeLoginDialog(success) {
  if (loginDialog) {
    loginDialog.close(success);
    loginDialog = null;
  }
}
			 )
	}
}