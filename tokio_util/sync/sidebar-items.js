window.SIDEBAR_ITEMS = {"struct":[["CancellationToken","A token which can be used to signal a cancellation request to one or more tasks."],["DropGuard","A wrapper for cancellation token which automatically cancels it on drop. It is created using `drop_guard` method on the `CancellationToken`."],["PollSemaphore","A wrapper around `Semaphore` that provides a `poll_acquire` method."],["PollSendError","Error returned by the `PollSender` when the channel is closed."],["PollSender","A wrapper around `mpsc::Sender` that can be polled."],["ReusableBoxFuture","A reusable `Pin<Box<dyn Future<Output = T> + Send + 'a>>`."],["WaitForCancellationFuture","A Future that is resolved once the corresponding [`CancellationToken`] is cancelled."],["WaitForCancellationFutureOwned","A Future that is resolved once the corresponding [`CancellationToken`] is cancelled."]]};