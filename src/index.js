module.exports.cepRequire = function(babel) {
  const { types: t } = babel;

  return {
    name: "cep-require",
    visitor: {
      VariableDeclaration(path, state) {
        if (path.node.leadingComments) {
          if (path.node.leadingComments[0].value == "@ts-ignore-cep") {
            console.log(state.opts);
            path.node.declarations[0].init.callee.name =
              "window.cep_node.require";
          }
        }
      }
    }
  };
};
