export default {
  cooldown: (pkg) => {
    if (["@oxfmt/"].some((prefix) => pkg.startsWith(prefix)) || ["oxfmt"].includes(pkg)) return 0;

    return 1;
  },
};
