window.SIDEBAR_ITEMS = {"fn":[["backtrack_err","Transforms an [`ErrMode::Cut`] (unrecoverable) to [`ErrMode::Backtrack`] (recoverable)"],["cond","Calls the parser if the condition is met."],["cut_err","Transforms an [`ErrMode::Backtrack`] (recoverable) to [`ErrMode::Cut`] (unrecoverable)"],["eof","Match the end of the [`Stream`]"],["fail","A parser which always fails."],["iterator","Creates an iterator from input data and a parser."],["not","Succeeds if the child parser returns an error."],["opt","Apply a [`Parser`], producing `None` on [`ErrMode::Backtrack`]."],["peek","Tries to apply its parser without consuming the input."],["rest","Return the remaining input."],["rest_len","Return the length of the remaining input."],["success","Always succeeds with given value without consuming any input."],["todo","A placeholder for a not-yet-implemented [`Parser`]"]],"struct":[["AndThen","Implementation of [`Parser::and_then`]"],["ByRef","Implementation of [`Parser::by_ref`][Parser::by_ref]"],["CompleteErr","Implementation of [`Parser::complete_err`]"],["Context","Implementation of [`Parser::context`]"],["ErrInto","Implementation of [`Parser::err_into`]"],["FlatMap","Implementation of [`Parser::flat_map`]"],["Map","Implementation of [`Parser::map`]"],["MapRes","Implementation of [`Parser::map_res`]"],["OutputInto","Implementation of [`Parser::output_into`]"],["ParseTo","Implementation of [`Parser::parse_to`]"],["ParserIterator","Main structure associated to [`iterator`]."],["Recognize","Implementation of [`Parser::recognize`]"],["Span","Implementation of [`Parser::span`]"],["Value","Implementation of [`Parser::value`]"],["Verify","Implementation of [`Parser::verify`]"],["VerifyMap","Implementation of [`Parser::verify_map`]"],["Void","Implementation of [`Parser::void`]"],["WithRecognized","Implementation of [`Parser::with_recognized`]"],["WithSpan","Implementation of [`Parser::with_span`]"]]};