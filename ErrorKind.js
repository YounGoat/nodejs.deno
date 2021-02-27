/**
 * @deprecated since 0.1.0
 * 
 * Reference:
 *   https://github.com/denoland/deno/blob/ec9080f34c936d9af56cca68de664954053bf423/cli/msg.fbs
 */


const ERRORS = [
	"NoError",

	// io errors

	"NotFound",
	"PermissionDenied",
	"ConnectionRefused",
	"ConnectionReset",
	"ConnectionAborted",
	"NotConnected",
	"AddrInUse",
	"AddrNotAvailable",
	"BrokenPipe",
	"AlreadyExists",
	"WouldBlock",
	"InvalidInput",
	"InvalidData",
	"TimedOut",
	"Interrupted",
	"WriteZero",
	"Other",
	"UnexpectedEof",
	"BadResource",
	"CommandFailed",

	// url errors

	"EmptyHost",
	"IdnaError",
	"InvalidPort",
	"InvalidIpv4Address",
	"InvalidIpv6Address",
	"InvalidDomainCharacter",
	"RelativeUrlWithoutBase",
	"RelativeUrlWithCannotBeABaseBase",
	"SetHostOnCannotBeABaseUrl",
	"Overflow",

	// hyper errors

	"HttpUser",
	"HttpClosed",
	"HttpCanceled",
	"HttpParse",
	"HttpOther",
	"TooLarge",

	// custom errors
	"InvalidUri",
	"InvalidSeekMode",
	"OpNotAvaiable",
	"WorkerInitFailed",
	"UnixError",
];

const ErrorKind = {};

ERRORS.forEach((name, index) => {
	ErrorKind[name] = index;
	ErrorKind[index] = name;
});

module.exports = ErrorKind;