# install rust
''' bash
$ curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
$ rustc --version
$ echo %PATH
$ rustup update
$ rustup install nightly
$ cargo +nightly bench
'''
# install solana-cli:
'''bash
$ sh -c "$(curl -sSfL https://release.solana.com/LATEST_RELEASE/install)"
'''

# install dependecies
''' bash
$ cargo build // for cargo add dependecies, cargo install packages cargo clean # # and cargo --help
'''
# Build
''' bash
$ cargo build
$ cargo test
'''