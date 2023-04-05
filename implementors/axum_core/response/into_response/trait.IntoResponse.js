(function() {var implementors = {
"axum":[["impl&lt;T&gt; <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"struct\" href=\"axum/struct.Extension.html\" title=\"struct axum::Extension\">Extension</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.2/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.2/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl&lt;S&gt; <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"struct\" href=\"axum/body/struct.StreamBody.html\" title=\"struct axum::body::StreamBody\">StreamBody</a>&lt;S&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"futures_core/stream/trait.TryStream.html\" title=\"trait futures_core::stream::TryStream\">TryStream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.2/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_core::stream::TryStream::Ok\">Ok</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.2/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.TryStream.html#associatedtype.Error\" title=\"type futures_core::stream::TryStream::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.2/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"axum/type.BoxError.html\" title=\"type axum::BoxError\">BoxError</a>&gt;,</span>"],["impl <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"struct\" href=\"axum/extract/path/struct.FailedToDeserializePathParams.html\" title=\"struct axum::extract::path::FailedToDeserializePathParams\">FailedToDeserializePathParams</a>"],["impl <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"struct\" href=\"axum/extract/path/struct.InvalidUtf8InPathParam.html\" title=\"struct axum::extract::path::InvalidUtf8InPathParam\">InvalidUtf8InPathParam</a>"],["impl <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"struct\" href=\"axum/extract/rejection/struct.MissingExtension.html\" title=\"struct axum::extract::rejection::MissingExtension\">MissingExtension</a>"],["impl <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"struct\" href=\"axum/extract/rejection/struct.MissingPathParams.html\" title=\"struct axum::extract::rejection::MissingPathParams\">MissingPathParams</a>"],["impl <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"struct\" href=\"axum/extract/rejection/struct.InvalidFormContentType.html\" title=\"struct axum::extract::rejection::InvalidFormContentType\">InvalidFormContentType</a>"],["impl <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"struct\" href=\"axum/extract/rejection/struct.FailedToResolveHost.html\" title=\"struct axum::extract::rejection::FailedToResolveHost\">FailedToResolveHost</a>"],["impl <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"struct\" href=\"axum/extract/rejection/struct.FailedToDeserializeForm.html\" title=\"struct axum::extract::rejection::FailedToDeserializeForm\">FailedToDeserializeForm</a>"],["impl <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"struct\" href=\"axum/extract/rejection/struct.FailedToDeserializeFormBody.html\" title=\"struct axum::extract::rejection::FailedToDeserializeFormBody\">FailedToDeserializeFormBody</a>"],["impl <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"struct\" href=\"axum/extract/rejection/struct.FailedToDeserializeQueryString.html\" title=\"struct axum::extract::rejection::FailedToDeserializeQueryString\">FailedToDeserializeQueryString</a>"],["impl <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"enum\" href=\"axum/extract/rejection/enum.QueryRejection.html\" title=\"enum axum::extract::rejection::QueryRejection\">QueryRejection</a>"],["impl <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"enum\" href=\"axum/extract/rejection/enum.FormRejection.html\" title=\"enum axum::extract::rejection::FormRejection\">FormRejection</a>"],["impl <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"enum\" href=\"axum/extract/rejection/enum.RawFormRejection.html\" title=\"enum axum::extract::rejection::RawFormRejection\">RawFormRejection</a>"],["impl <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"enum\" href=\"axum/extract/rejection/enum.ExtensionRejection.html\" title=\"enum axum::extract::rejection::ExtensionRejection\">ExtensionRejection</a>"],["impl <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"enum\" href=\"axum/extract/rejection/enum.PathRejection.html\" title=\"enum axum::extract::rejection::PathRejection\">PathRejection</a>"],["impl <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"enum\" href=\"axum/extract/rejection/enum.RawPathParamsRejection.html\" title=\"enum axum::extract::rejection::RawPathParamsRejection\">RawPathParamsRejection</a>"],["impl <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"enum\" href=\"axum/extract/rejection/enum.HostRejection.html\" title=\"enum axum::extract::rejection::HostRejection\">HostRejection</a>"],["impl <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"struct\" href=\"axum/response/struct.Redirect.html\" title=\"struct axum::response::Redirect\">Redirect</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"axum/response/trait.IntoResponse.html\" title=\"trait axum::response::IntoResponse\">IntoResponse</a> for <a class=\"struct\" href=\"axum/response/struct.Html.html\" title=\"struct axum::response::Html\">Html</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.2/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"http_body/full/struct.Full.html\" title=\"struct http_body::full::Full\">Full</a>&lt;<a class=\"struct\" href=\"bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>&gt;&gt;,</span>"]],
"axum_core":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()