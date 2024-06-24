const { it } = require('node:test');
const { code2bench } = require('./index');

const cppCode = `
void FSPermission::Apply(Environment* env,
                         const std::vector<std::string>& allow,
                         PermissionScope scope) {
  for (const std::string& res : allow) {
    if (res == "*") {
      if (scope == PermissionScope::kFileSystemRead) {
        deny_all_in_ = false;
        allow_all_in_ = true;
      } else {
        deny_all_out_ = false;
        allow_all_out_ = true;
      }
      return;
    }
    GrantAccess(scope, PathResolve(env, {res}));
  }
}
`
code2bench(cppCode, 'cpp')
.then(console.log)
