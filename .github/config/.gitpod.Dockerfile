FROM gitpod/workspace-full:build-branch-master

# Install custom tools, runtime, etc.
RUN brew install fzf \
      buildpacks/tap/pack
