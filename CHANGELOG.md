# 1.0.0

BREAKING: we now require ember-cli-fastboot >= 2.0.0, and if you're using broccoli-asset-rev it should be >= 2.7.0. This is to fix the order in which these run relative to prember, so that all asset links will get correct handling.

# 0.4.0

BREAKING: the signature for custom url discovery functions has changed from

    async function(distDir, visit) { return [...someURLs] }

to

    async function({ distDir, visit }) { return [...someURLs] }

This makes it nicer to compose multiple URL discovery strategies.
