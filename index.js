// Based loosely around work by Witold Szczerba - https://github.com/witoldsz/angular-http-auth
// from Mastering Web Application Development
angular.module('security', [
  'security.service',
  'security.interceptor',
  'security.login',
  'security.authorization']);
