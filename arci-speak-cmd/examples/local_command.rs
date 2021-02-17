use arci::Speaker;
use arci_speak_cmd::LocalCommand;
use structopt::StructOpt;

#[derive(Debug, StructOpt)]
struct Args {
    message: String,
}

fn main() {
    env_logger::init();
    let args = Args::from_args();

    let speaker = LocalCommand::default();
    speaker.speak(&args.message)
}