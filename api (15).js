 * Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\settings.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\mongo_client.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
127.0.0.1 - - [26/Mar/2026 21:53:46] "OPTIONS /api/jobs/?skill=&location= HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:53:46] "OPTIONS /api/enhance/search-history HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:53:46] "OPTIONS /api/jobs/?skill=&location= HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:53:46] "OPTIONS /api/enhance/search-history HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:53:46] "GET /api/jobs/?skill=&location= HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:53:46] "GET /api/enhance/search-history HTTP/1.1" 422 -
127.0.0.1 - - [26/Mar/2026 21:53:46] "GET /api/jobs/?skill=&location= HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:53:47] "GET /api/enhance/search-history HTTP/1.1" 422 -
127.0.0.1 - - [26/Mar/2026 21:54:24] "OPTIONS /api/auth/login HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:54:24] "POST /api/auth/login HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:54:24] "OPTIONS /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:54:25] "OPTIONS /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:54:25] "OPTIONS /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:54:25] "OPTIONS /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:54:25] "OPTIONS /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:54:25] "OPTIONS /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:54:25] "GET /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:54:25] "GET /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:54:25] "GET /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:54:25] "GET /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:54:25] "GET /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:54:25] "GET /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:55:13] "OPTIONS /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:55:14] "POST /api/jobs/ HTTP/1.1" 201 -
127.0.0.1 - - [26/Mar/2026 21:55:14] "GET /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:55:50] "OPTIONS /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:55:50] "POST /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:55:51] "GET /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:56:17] "OPTIONS /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:56:17] "POST /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:56:32] "OPTIONS /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:56:32] "OPTIONS /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:56:32] "OPTIONS /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:56:32] "OPTIONS /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:56:32] "OPTIONS /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:56:32] "OPTIONS /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:56:32] "GET /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:56:32] "GET /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:56:32] "GET /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:56:32] "GET /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:56:32] "GET /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:56:32] "GET /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:57:08] "OPTIONS /api/auth/login HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:57:09] "POST /api/auth/login HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:57:09] "OPTIONS /api/resume/profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:57:09] "OPTIONS /api/jobs/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:57:09] "OPTIONS /api/resume/profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:57:09] "OPTIONS /api/jobs/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:57:09] "GET /api/resume/profile HTTP/1.1" 404 -
127.0.0.1 - - [26/Mar/2026 21:57:09] "GET /api/jobs/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:57:09] "GET /api/resume/profile HTTP/1.1" 404 -
127.0.0.1 - - [26/Mar/2026 21:57:10] "GET /api/jobs/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:57:24] "OPTIONS /api/resume/upload HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:57:25] "POST /api/resume/upload HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:57:25] "OPTIONS /api/match/recommendations HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:57:25] "GET /api/match/recommendations HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:57:33] "OPTIONS /api/enhance/resume-score/69c55deaa6bd6f3949cd8a5c HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:57:33] "GET /api/enhance/resume-score/69c55deaa6bd6f3949cd8a5c HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:58:42] "OPTIONS /api/enhance/resume-score/69c55bdb567f1acedfbe1709 HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 21:58:43] "GET /api/enhance/resume-score/69c55bdb567f1acedfbe1709 HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:00:10] "OPTIONS /api/jobs/69c55deaa6bd6f3949cd8a5c/apply HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:00:11] "POST /api/jobs/69c55deaa6bd6f3949cd8a5c/apply HTTP/1.1" 201 -
127.0.0.1 - - [26/Mar/2026 22:00:11] "OPTIONS /api/jobs/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:00:11] "GET /api/jobs/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:00:15] "OPTIONS /api/jobs/69c55bdb567f1acedfbe1709/apply HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:00:15] "POST /api/jobs/69c55bdb567f1acedfbe1709/apply HTTP/1.1" 201 -
127.0.0.1 - - [26/Mar/2026 22:00:15] "GET /api/jobs/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:00:23] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:00:23] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:00:23] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:00:23] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\enhance.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\enhance.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\enhance.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\enhance.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
127.0.0.1 - - [26/Mar/2026 22:04:38] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:04:38] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:04:39] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:04:39] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\werkzeug\\serving.py', reloading
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
127.0.0.1 - - [26/Mar/2026 22:07:22] "OPTIONS /api/enhance/interview-prep?skill=python HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:07:22] "GET /api/enhance/interview-prep?skill=python HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:11:08] "OPTIONS /api/enhance/interview-evaluate HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:11:08] "POST /api/enhance/interview-evaluate HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:12:38] "OPTIONS /api/enhance/interview-evaluate HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:12:38] "POST /api/enhance/interview-evaluate HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:14:49] "OPTIONS /api/enhance/interview-prep?skill=react HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:14:49] "GET /api/enhance/interview-prep?skill=react HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:14:59] "OPTIONS /api/resume/profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:14:59] "OPTIONS /api/jobs/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:14:59] "OPTIONS /api/resume/profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:14:59] "OPTIONS /api/jobs/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:14:59] "GET /api/resume/profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:15:00] "GET /api/jobs/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:15:00] "GET /api/resume/profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:15:00] "OPTIONS /api/match/recommendations HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:15:00] "GET /api/jobs/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:15:00] "OPTIONS /api/match/recommendations HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:15:00] "GET /api/match/recommendations HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:15:00] "GET /api/match/recommendations HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:15:05] "OPTIONS /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:15:05] "OPTIONS /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:15:05] "GET /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:15:05] "GET /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:15:09] "OPTIONS /api/enhance/skill-gap/69c55deaa6bd6f3949cd8a5c HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:15:09] "GET /api/enhance/skill-gap/69c55deaa6bd6f3949cd8a5c HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:22:35] "OPTIONS /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:22:36] "POST /api/enhance/chatbot HTTP/1.1" 200 -
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\enhance.py', reloading
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
127.0.0.1 - - [26/Mar/2026 22:26:24] "OPTIONS /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:26:24] "POST /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:26:53] "OPTIONS /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:26:54] "POST /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:27:11] "OPTIONS /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:27:11] "POST /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:27:26] "OPTIONS /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:27:26] "POST /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:27:58] "OPTIONS /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:27:58] "POST /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:28:04] "OPTIONS /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:28:04] "POST /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:28:09] "OPTIONS /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:28:10] "POST /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:28:13] "POST /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:28:26] "OPTIONS /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:28:26] "POST /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:28:59] "OPTIONS /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:29:00] "POST /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:29:06] "OPTIONS /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:29:06] "POST /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:29:50] "OPTIONS /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:29:50] "POST /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:29:53] "POST /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:29:56] "OPTIONS /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:29:56] "POST /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:30:27] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:30:27] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:30:27] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:30:27] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:03] "GET /api/jobs/?skill=&location= HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:03] "GET /api/jobs/?skill=&location= HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:36] "OPTIONS /api/auth/login HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:37] "POST /api/auth/login HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:37] "OPTIONS /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:37] "OPTIONS /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:37] "OPTIONS /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:37] "OPTIONS /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:37] "OPTIONS /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:37] "OPTIONS /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:37] "GET /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:37] "GET /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:37] "GET /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:37] "GET /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:38] "GET /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:38] "GET /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:55] "OPTIONS /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:31:55] "POST /api/enhance/chatbot HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:05] "OPTIONS /api/jobs/?skill=&location= HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:05] "OPTIONS /api/enhance/search-history HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:05] "OPTIONS /api/jobs/?skill=&location= HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:05] "OPTIONS /api/enhance/search-history HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:05] "GET /api/jobs/?skill=&location= HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:06] "GET /api/enhance/search-history HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:06] "GET /api/jobs/?skill=&location= HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:06] "GET /api/enhance/search-history HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:15] "OPTIONS /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:15] "OPTIONS /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:15] "OPTIONS /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:15] "OPTIONS /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:15] "OPTIONS /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:15] "OPTIONS /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:16] "GET /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:16] "GET /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:16] "GET /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:16] "GET /api/jobs/ HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:16] "GET /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:32:16] "GET /api/enhance/company-profile HTTP/1.1" 200 -
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\jobs.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\match.py', reloading
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\jobs.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\jobs.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\jobs.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
127.0.0.1 - - [26/Mar/2026 22:35:32] "OPTIONS /api/jobs/?recruiter_id=69c55bfc1b0c3174be7fbfbb&include_closed=true HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:35:32] "OPTIONS /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:35:32] "OPTIONS /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:35:32] "OPTIONS /api/jobs/?recruiter_id=69c55bfc1b0c3174be7fbfbb&include_closed=true HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:35:32] "OPTIONS /api/jobs/recruiter/analytics HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:35:32] "OPTIONS /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:35:33] "OPTIONS /api/jobs/recruiter/analytics HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:35:33] "OPTIONS /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:35:33] "GET /api/jobs/?recruiter_id=69c55bfc1b0c3174be7fbfbb&include_closed=true HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:35:33] "GET /api/jobs/recruiter/analytics HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:35:33] "GET /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:35:33] "GET /api/jobs/recruiter/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:35:33] "GET /api/jobs/?recruiter_id=69c55bfc1b0c3174be7fbfbb&include_closed=true HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:35:33] "GET /api/jobs/recruiter/analytics HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:35:33] "GET /api/enhance/company-profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:35:33] "GET /api/jobs/recruiter/applications HTTP/1.1" 200 -
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\jobs.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\jobs.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\jobs.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\jobs.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\jobs.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\jobs.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\match.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\match.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\create_admin.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\seed_users.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\admin.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\matcher.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\parser.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\resume.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\__init__.py', reloading
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\app.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Scripts\\dumppdf.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Scripts\\pdf2txt.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\threadpoolctl.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\typing_extensions.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\dnssec.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\dnssectypes.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\e164.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\edns.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\entropy.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\enum.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\exception.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\flags.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\grange.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\immutable.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\inet.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\ipv4.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\ipv6.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\message.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\name.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\namedict.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\nameserver.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\node.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\opcode.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\query.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rcode.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdata.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdataclass.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdataset.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdatatype.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\renderer.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\resolver.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\reversename.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rrset.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\serial.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\set.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\tokenizer.py', reloading
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\itsdangerous\\_json.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\itsdangerous\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\async_utils.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\bccache.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\compiler.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\constants.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\debug.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\defaults.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\environment.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\exceptions.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\ext.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\filters.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\idtracking.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\lexer.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\loaders.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\meta.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\nativetypes.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\nodes.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\optimizer.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\parser.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\runtime.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\jinja2\\sandbox.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\util.py', reloading
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\driver_info.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\encryption.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\encryption_options.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\errors.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\event_loggers.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\hello.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\helpers_shared.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\lock.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\logger.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\max_staleness_selectors.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\message.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\mongo_client.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\monitoring.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\network_layer.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\ocsp_cache.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\ocsp_support.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\operations.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\periodic_executor.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\pool.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\pool_options.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\pool_shared.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\pyopenssl_context.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\read_concern.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\read_preferences.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\response.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\results.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\pipeline.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\random_projection.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\_config.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\_distributor_init.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\_min_dependencies.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\events.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\exc.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\inspection.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\log.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\schema.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\types.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\tqdm\\asyncio.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\tqdm\\auto.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\tqdm\\autonotebook.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\tqdm\\cli.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\tqdm\\dask.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\tqdm\\gui.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\tqdm\\keras.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\tqdm\\notebook.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\tqdm\\rich.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\tqdm\\std.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\tqdm\\tk.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\image\\exceptions.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\image\\gif.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\image\\helpers.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\image\\image.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\image\\jpeg.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\image\\png.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\image\\tiff.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\image\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\opc\\constants.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\opc\\coreprops.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\opc\\exceptions.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\opc\\oxml.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\opc\\package.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\opc\\packuri.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\opc\\part.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\opc\\phys_pkg.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\opc\\pkgreader.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\opc\\pkgwriter.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\opc\\rel.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\opc\\shared.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\opc\\spec.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\oxml\\coreprops.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\oxml\\document.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\oxml\\drawing.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\oxml\\exceptions.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\oxml\\ns.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\oxml\\numbering.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\docx\\oxml\\parser.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\lxml\\html\\usedoctest.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\lxml\\html\\_diffcommand.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\lxml\\html\\_difflib.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\lxml\\html\\_html5builder.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\lxml\\html\\_setmixin.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\lxml\\html\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\lxml\\isoschematron\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\app\\chartparser_app.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\app\\chunkparser_app.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\app\\collocations_app.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\app\\concordance_app.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\app\\nemo_app.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\app\\rdparser_app.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\app\\srparser_app.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\app\\wordfreq_app.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\app\\wordnet_app.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\app\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\ccg\\api.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\ccg\\chart.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\ccg\\combinator.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\ccg\\lexicon.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\api.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\bllip.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\chart.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\corenlp.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\dependencygraph.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\earleychart.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\evaluate.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\featurechart.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\generate.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\malt.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\nonprojectivedependencyparser.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\pchart.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\projectivedependencyparser.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\recursivedescent.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\shiftreduce.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\stanford.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\transitionparser.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\util.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\viterbi.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\parse\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\sem\\boxer.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\sem\\chat80.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\tokenize\\sonority_sequencing.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\tokenize\\stanford.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\tokenize\\stanford_segmenter.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\tokenize\\texttiling.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\tokenize\\toktok.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\tokenize\\treebank.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\tokenize\\util.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\tokenize\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\translate\\api.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\translate\\bleu_score.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\translate\\chrf_score.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\translate\\gale_church.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\translate\\gdfa.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\translate\\gleu_score.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\translate\\ibm1.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\translate\\ibm2.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\translate\\ibm3.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\translate\\ibm4.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\translate\\ibm5.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\translate\\ibm_model.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\translate\\meteor_score.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\translate\\metrics.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\translate\\nist_score.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\translate\\phrase_based.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\f2py\\f2py2e.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\f2py\\f90mod_rules.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\f2py\\func2subr.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\f2py\\rules.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\f2py\\symbolic.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\f2py\\use_rules.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\f2py\\_isocbind.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\f2py\\_src_pyf.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\f2py\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\f2py\\__main__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\f2py\\__version__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\fft\\_helper.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\fft\\_pocketfft.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\fft\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\array_utils.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\format.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\introspect.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\mixins.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\npyio.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\recfunctions.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\scimath.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\stride_tricks.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\user_array.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\_arraypad_impl.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\_arraysetops_impl.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\_arrayterator_impl.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\_array_utils_impl.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\defchararray.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\einsumfunc.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\fromnumeric.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\function_base.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\getlimits.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\memmap.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\multiarray.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\numeric.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\numerictypes.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\overrides.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\printoptions.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\records.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\shape_base.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\strings.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\umath.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\_add_newdocs.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\_add_newdocs_scalars.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\_asarray.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\_dtype.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\_dtype_ctypes.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\client_bulk.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\client_session.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\collection.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\command_cursor.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\cursor.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\database.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\encryption.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\helpers.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\monitor.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\network.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\pool.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\server.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\srv_resolver.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\topology.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\uri_parser.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymysql\\constants\\CLIENT.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymysql\\constants\\COMMAND.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymysql\\constants\\CR.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymysql\\constants\\ER.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymysql\\constants\\FIELD_TYPE.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymysql\\constants\\FLAG.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymysql\\constants\\SERVER_STATUS.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\interpolate\\_fitpack_py.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\interpolate\\_fitpack_repro.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\interpolate\\_interpolate.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\interpolate\\_ndbspline.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\interpolate\\_ndgriddata.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\interpolate\\_pade.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\interpolate\\_polyint.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\interpolate\\_rbf.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\interpolate\\_rbfinterp.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\interpolate\\_rbfinterp_common.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\interpolate\\_rbfinterp_np.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\interpolate\\_rbfinterp_xp.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\interpolate\\_rgi.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\interpolate\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\io\\harwell_boeing.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\io\\idl.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\io\\mmio.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\io\\netcdf.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\io\\wavfile.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\io\\_fortran.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\io\\_idl.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\io\\_mmio.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\io\\_netcdf.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\io\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\linalg\\basic.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\linalg\\blas.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_dcsrch.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_differentiable_functions.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_differentialevolution.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_direct_py.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_dual_annealing.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_elementwise.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_hessian_update_strategy.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_isotonic.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_lbfgsb_py.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_linesearch.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_linprog.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_linprog_doc.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_linprog_highs.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_linprog_ip.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_linprog_rs.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_linprog_simplex.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_linprog_util.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_milp.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_minimize.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_minpack_py.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_nnls.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\_nonlin.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\_compressed.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\_construct.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\_coo.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\_csc.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\_csr.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\_data.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\_dia.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\_dok.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\_extract.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\_index.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\_lil.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\_matrix.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\_matrix_io.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\_spfuncs.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\_sputils.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\spatial\\ckdtree.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\spatial\\distance.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\spatial\\kdtree.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\spatial\\qhull.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\spatial\\_geometric_slerp.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\spatial\\_kdtree.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\spatial\\_plotutils.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\stats\\_quantile.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\stats\\_relative_risk.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\stats\\_resampling.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\stats\\_result_classes.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\stats\\_sampling.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\stats\\_sensitivity_analysis.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\stats\\_stats_mstats_common.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\stats\\_stats_py.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\stats\\_survival.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\stats\\_tukeylambda_stats.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\stats\\_variation.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\stats\\_warnings_errors.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\stats\\_wilcoxon.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\stats\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\deprecation.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\doccer.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\uarray.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\_array_api.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\_array_api_compat_vendor.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\_array_api_docs_tables.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\_array_api_no_0d.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\_array_api_override.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\_bunch.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\setuptools\\_vendor\\typing_extensions.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\setuptools\\_vendor\\zipp.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\_affinity_propagation.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\_agglomerative.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\_bicluster.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\_birch.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\_bisect_k_means.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\_dbscan.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\_feature_agglomeration.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\_kmeans.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\_mean_shift.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\_optics.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\_spectral.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\compose\\_column_transformer.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\compose\\_target.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\compose\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\covariance\\_elliptic_envelope.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\covariance\\_empirical_covariance.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\covariance\\_graph_lasso.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\covariance\\_robust_covariance.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\covariance\\_shrunk_covariance.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\inspection\\_permutation_importance.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\inspection\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\_base.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\_bayes.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\_coordinate_descent.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\_huber.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\_least_angle.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\_linear_loss.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\_logistic.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\_omp.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\_passive_aggressive.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\_perceptron.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\_quantile.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\_ransac.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\_ridge.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\_sag.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\_stochastic_gradient.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\_theil_sen.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\manifold\\_isomap.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\manifold\\_locally_linear.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\manifold\\_mds.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\tests\\test_min_dependencies_readme.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\tests\\test_multiclass.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\tests\\test_multioutput.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\tests\\test_naive_bayes.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\tests\\test_pipeline.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\tests\\test_public_functions.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\tests\\test_random_projection.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\tree\\_classes.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\tree\\_export.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\tree\\_reingold_tilford.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\tree\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\class_weight.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\deprecation.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\discovery.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\estimator_checks.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\extmath.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\fixes.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\graph.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\metadata_routing.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\metaestimators.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\multiclass.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\event\\api.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\event\\attr.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\event\\base.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\event\\legacy.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\event\\registry.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\event\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\associationproxy.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\automap.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\baked.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\compiler.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\horizontal_shard.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\hybrid.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\indexable.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\instrumentation.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\mutable.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\orderinglist.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\serializer.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\future\\engine.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\future\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\orm\\attributes.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\orm\\base.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\sql\\elements.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\sql\\events.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\sql\\expression.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\sql\\functions.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\sql\\lambdas.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\sql\\naming.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\sql\\operators.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\sql\\roles.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\sql\\schema.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\sql\\selectable.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\sql\\sqltypes.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\sql\\traversals.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\sql\\type_api.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\sql\\util.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\sql\\visitors.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\cryptography\\hazmat\\primitives\\_serialization.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\cryptography\\hazmat\\primitives\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\AFSDB.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\AMTRELAY.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\AVC.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\CAA.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\CDNSKEY.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\CDS.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\CERT.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\CNAME.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\CSYNC.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\DLV.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\DNAME.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\DNSKEY.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\DS.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\DSYNC.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\EUI48.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\EUI64.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\GPOS.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\HINFO.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\HIP.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\ISDN.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\L32.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\L64.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\LOC.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\LP.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\MX.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\NID.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\NINFO.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\NS.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\NSEC.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\NSEC3.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\NSEC3PARAM.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\OPENPGPKEY.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\OPT.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\PTR.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\RESINFO.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\RP.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\RRSIG.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\RT.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\SMIMEA.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\SOA.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\SPF.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\dns\\rdtypes\\ANY\\SSHFP.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\corpus\\reader\\timit.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\corpus\\reader\\toolbox.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\corpus\\reader\\twitter.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\corpus\\reader\\udhr.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\corpus\\reader\\util.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\corpus\\reader\\verbnet.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\corpus\\reader\\wordlist.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\corpus\\reader\\wordnet.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\corpus\\reader\\xmldocs.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\corpus\\reader\\ycoe.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\corpus\\reader\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\test\\unit\\test_aline.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\test\\unit\\test_bllip.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\test\\unit\\test_brill.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\test\\unit\\test_cfd_mutation.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\test\\unit\\test_cfg2chomsky.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\test\\unit\\test_chunk.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\test\\unit\\test_classify.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\test\\unit\\test_collocations.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\test\\unit\\test_concordance.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\test\\unit\\test_corenlp.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\test\\unit\\test_corpora.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\test\\unit\\test_corpus_views.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\test\\unit\\test_data.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\test\\unit\\test_disagreement.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\nltk\\test\\unit\\test_distance.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\f2py\\_backends\\_distutils.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\f2py\\_backends\\_meson.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\f2py\\_backends\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\fft\\tests\\test_helper.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\fft\\tests\\test_pocketfft.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\tests\\test_arraypad.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\tests\\test_arraysetops.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\tests\\test_arrayterator.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\tests\\test_array_utils.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\tests\\test_format.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\tests\\test_function_base.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\tests\\test_histograms.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\tests\\test_index_tricks.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\tests\\test_io.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\tests\\test_loadtxt.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\tests\\test_mixins.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\tests\\test_nanfunctions.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\lib\\tests\\test_packbits.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_arraymethod.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_arrayobject.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_arrayprint.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_array_api_info.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_array_coercion.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_array_interface.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_casting_floatingpoint_errors.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_casting_unittests.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_conversion_utils.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_cpu_dispatcher.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_cpu_features.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_custom_dtypes.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_cython.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_datetime.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_defchararray.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_deprecations.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_dlpack.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_dtype.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_einsum.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_errstate.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_extint128.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_finfo.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\_core\\tests\\test_function_base.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\commands\\freeze.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\commands\\hash.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\commands\\help.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\commands\\index.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\commands\\inspect.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\commands\\install.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\commands\\list.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\commands\\search.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\commands\\show.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\commands\\uninstall.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\commands\\wheel.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\commands\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\distributions\\base.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\distributions\\installed.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\distributions\\sdist.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\distributions\\wheel.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\distributions\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\index\\collector.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\index\\package_finder.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\index\\sources.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\index\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\locations\\base.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\locations\\_distutils.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\locations\\_sysconfig.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\locations\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\metadata\\base.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_internal\\metadata\\pkg_resources.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\chardet\\charsetgroupprober.py', reloading
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\packaging\\_manylinux.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\packaging\\_musllinux.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\packaging\\_structures.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\packaging\\__about__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\packaging\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pkg_resources\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\platformdirs\\android.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\platformdirs\\api.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\platformdirs\\macos.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\platformdirs\\unix.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\platformdirs\\version.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\platformdirs\\windows.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\platformdirs\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\platformdirs\\__main__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pygments\\cmdline.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pygments\\console.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pygments\\filter.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pygments\\formatter.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pygments\\lexer.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pygments\\modeline.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pygments\\plugin.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pygments\\regexopt.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pygments\\scanner.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pygments\\sphinxext.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pygments\\style.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pygments\\token.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pygments\\unistring.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pygments\\util.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\scope.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\screen.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\segment.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\spinner.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\status.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\style.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\styled.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\syntax.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\table.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\terminal_theme.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\text.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\theme.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\themes.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\traceback.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\tree.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\_cell_widths.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\_emoji_codes.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\_emoji_replace.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\_export_format.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\_extension.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\_fileno.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\_inspect.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\_log_render.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\_loop.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\rich\\_null_file.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\tests\\test_banded_ode_solvers.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\tests\\test_bvp.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\tests\\test_cubature.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\tests\\test_integrate.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\tests\\test_quadpack.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\tests\\test_quadrature.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\tests\\test_tanhsinh.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\tests\\test__quad_vec.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\_ivp\\base.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\_ivp\\bdf.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\_ivp\\common.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\_ivp\\dop853_coefficients.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\_ivp\\ivp.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\_ivp\\lsoda.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\_ivp\\radau.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\_ivp\\rk.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\_ivp\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\_rules\\_base.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\_rules\\_gauss_kronrod.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\_rules\\_gauss_legendre.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\_rules\\_genz_malik.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\integrate\\_rules\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\interpolate\\tests\\test_bary_rational.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\odr\\tests\\test_odr.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\cython_optimize\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_bracket.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_chandrupatla.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_cobyla.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_cobyqa.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_constraints.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_constraint_conversion.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_cython_optimize.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_differentiable_functions.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_direct.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_extending.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_hessian_update_strategy.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_isotonic_regression.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_lbfgsb_hessinv.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_lbfgsb_setulb.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_least_squares.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_linear_assignment.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_linesearch.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_linprog.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_lsq_common.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_lsq_linear.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\optimize\\tests\\test_milp.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\csgraph\\_laplacian.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\csgraph\\_validation.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\csgraph\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\linalg\\dsolve.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\linalg\\eigen.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\linalg\\interface.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\linalg\\isolve.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\linalg\\matfuncs.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\linalg\\_expm_multiply.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\linalg\\_funm_multiply_krylov.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\linalg\\_interface.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\linalg\\_matfuncs.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\linalg\\_norm.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\linalg\\_onenormest.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\linalg\\_special_sparse_arrays.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\linalg\\_svdp.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\linalg\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\tests\\test_64bit.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\tests\\test_arithmetic1d.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\tests\\test_array_api.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\tests\\test_base.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\sparse\\tests\\test_common1d.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_nan_inputs.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_ndtr.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_ndtri_exp.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_orthogonal.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_orthogonal_eval.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_owens_t.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_pcf.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_pdtr.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_powm1.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_precompute_expn_asy.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_precompute_gammainc.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_precompute_utils.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_round.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_sf_error.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_sici.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_specfun.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_spence.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_spfun_stats.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_spherical_bessel.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_sph_harm.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_support_alternative_backends.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_trig.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_ufunc_signatures.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_wrightomega.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_wright_bessel.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\tests\\test_zeta.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\_precompute\\cosine_cdf.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\_precompute\\expn_asy.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\_precompute\\gammainc_asy.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\special\\_precompute\\gammainc_data.py', reloading
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_extra\\testing.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_extra\\_delegation.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_extra\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\cobyqa\\framework.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\cobyqa\\main.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\cobyqa\\models.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\cobyqa\\problem.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\cobyqa\\settings.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\cobyqa\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\pyprima\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\tests\\test_array_api.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\tests\\test_bunch.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\tests\\test_ccallback.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\tests\\test_config.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\tests\\test_deprecation.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\tests\\test_doccer.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\tests\\test_import_cycles.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\tests\\test_public_api.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\tests\\test_scipy_version.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\tests\\test_tmpdirs.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\tests\\test_warnings.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\tests\\test__gcutils.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\tests\\test__pep440.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\tests\\test__testutils.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\tests\\test_hdbscan.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\tests\\test_hierarchical.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\tests\\test_k_means.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\tests\\test_mean_shift.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\tests\\test_optics.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\tests\\test_spectral.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cluster\\_hdbscan\\hdbscan.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\compose\\tests\\test_column_transformer.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\compose\\tests\\test_target.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\covariance\\tests\\test_covariance.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\covariance\\tests\\test_elliptic_envelope.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\covariance\\tests\\test_graphical_lasso.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\covariance\\tests\\test_robust_covariance.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\cross_decomposition\\tests\\test_pls.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\datasets\\tests\\test_20news.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\datasets\\tests\\test_arff_parser.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\datasets\\tests\\test_base.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\datasets\\tests\\test_california_housing.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\datasets\\tests\\test_common.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\tests\\test_bayes.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\tests\\test_common.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\tests\\test_coordinate_descent.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\tests\\test_huber.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\tests\\test_least_angle.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\tests\\test_linear_loss.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\tests\\test_logistic.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\tests\\test_omp.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\tests\\test_passive_aggressive.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\tests\\test_perceptron.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\tests\\test_quantile.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\tests\\test_ransac.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\tests\\test_ridge.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\tests\\test_sag.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\tests\\test_sgd.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\tests\\test_sparse_coordinate_descent.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\tests\\test_theil_sen.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\linear_model\\_glm\\glm.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\tree\\tests\\test_export.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\tree\\tests\\test_monotonic_tree.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\tree\\tests\\test_reingold_tilford.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\tree\\tests\\test_tree.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_arpack.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_arrayfuncs.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_array_api.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_bunch.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_chunking.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_class_weight.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_cython_blas.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_cython_templating.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_deprecation.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_encode.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_estimator_checks.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_estimator_html_repr.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_extmath.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_fast_dict.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_fixes.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_graph.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_indexing.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_mask.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_metaestimators.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\utils\\tests\\test_missing.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\dialects\\postgresql\\provision.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\dialects\\postgresql\\psycopg.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\dialects\\postgresql\\psycopg2.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\dialects\\postgresql\\psycopg2cffi.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\dialects\\postgresql\\ranges.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\dialects\\postgresql\\types.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\dialects\\postgresql\\_psycopg_common.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\dialects\\postgresql\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\dialects\\sqlite\\aiosqlite.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\dialects\\sqlite\\base.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\dialects\\sqlite\\dml.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\dialects\\sqlite\\json.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\dialects\\sqlite\\provision.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\dialects\\sqlite\\pysqlcipher.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\dialects\\sqlite\\pysqlite.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\dialects\\sqlite\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\asyncio\\base.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\asyncio\\engine.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\asyncio\\exc.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\asyncio\\result.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\asyncio\\scoping.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sqlalchemy\\ext\\asyncio\\session.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\joblib\\externals\\loky\\backend\\fork_exec.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\joblib\\externals\\loky\\backend\\popen_loky_posix.py', reloading
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pygments\\lexers\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pygments\\styles\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pyparsing\\diagram\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pyproject_hooks\\_in_process\\_in_process.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\pyproject_hooks\\_in_process\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\resolvelib\\compat\\collections_abc.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\urllib3\\contrib\\appengine.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\urllib3\\contrib\\ntlmpool.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\urllib3\\contrib\\pyopenssl.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\urllib3\\contrib\\securetransport.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\urllib3\\contrib\\socks.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\urllib3\\contrib\\_appengine_environ.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\urllib3\\packages\\six.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\urllib3\\util\\connection.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\urllib3\\util\\proxy.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\urllib3\\util\\queue.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\urllib3\\util\\request.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\urllib3\\util\\response.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\urllib3\\util\\retry.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\urllib3\\util\\ssltransport.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\urllib3\\util\\ssl_.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pip\\_vendor\\urllib3\\util\\ssl_match_hostname.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\stats\\tests\\data\\fisher_exact_results_from_r.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\stats\\tests\\data\\_mvt.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\common\\_aliases.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\common\\_fft.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\common\\_helpers.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\common\\_linalg.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\common\\_typing.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\common\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\cupy\\fft.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\cupy\\linalg.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\cupy\\_aliases.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\cupy\\_info.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\cupy\\_typing.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\cupy\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\numpy\\fft.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\numpy\\linalg.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\numpy\\_aliases.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\numpy\\_info.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\numpy\\_typing.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\numpy\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\torch\\fft.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\torch\\linalg.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\torch\\_aliases.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\scipy\\_lib\\array_api_compat\\torch\\_info.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\metrics\\_plot\\tests\\test_precision_recall_display.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\metrics\\_plot\\tests\\test_predict_error_display.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\sklearn\\metrics\\_plot\\tests\\test_roc_curve_display.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\arithmetic.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\arrayprint.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\arrayterator.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\array_constructors.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\array_like.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\bitwise_ops.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\comparisons.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\dtype.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\einsumfunc.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\flatiter.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\fromnumeric.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\index_tricks.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\lib_user_array.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\lib_utils.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\lib_version.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\literal.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\ma.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\mod.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\modules.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\multiarray.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\ndarray_conversion.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\ndarray_misc.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\ndarray_shape_manipulation.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\nditer.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\numeric.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\numpy\\typing\\tests\\data\\pass\\numerictypes.py', reloading
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
127.0.0.1 - - [26/Mar/2026 22:54:50] "OPTIONS /api/jobs/?skill=&location= HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:54:50] "OPTIONS /api/enhance/search-history HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:54:50] "OPTIONS /api/jobs/?skill=&location= HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:54:50] "OPTIONS /api/enhance/search-history HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:54:50] "GET /api/jobs/?skill=&location= HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:54:50] "GET /api/enhance/search-history HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:54:50] "GET /api/jobs/?skill=&location= HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 22:54:50] "GET /api/enhance/search-history HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:15:18] "OPTIONS /api/auth/login HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:15:18] "POST /api/auth/login HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:15:18] "OPTIONS /api/resume/profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:15:18] "OPTIONS /api/jobs/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:15:18] "OPTIONS /api/resume/profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:15:18] "OPTIONS /api/jobs/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:15:18] "GET /api/resume/profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:15:19] "GET /api/jobs/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:15:19] "GET /api/resume/profile HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:15:19] "OPTIONS /api/match/recommendations HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:15:19] "GET /api/jobs/applications HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:15:19] "GET /api/match/recommendations HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:15:19] "GET /api/match/recommendations HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:15:24] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:15:24] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:15:25] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:15:25] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\auth.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\models.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\werkzeug\\serving.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\mongo_client.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\pymongo\\synchronous\\settings.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
127.0.0.1 - - [26/Mar/2026 23:31:32] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:31:32] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:31:33] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:31:33] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:31:35] "OPTIONS /api/enhance/interview-prep?skill=python HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:31:35] "GET /api/enhance/interview-prep?skill=python HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:39:39] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:39:39] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:39:43] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:42:51] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:42:51] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:42:51] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:42:51] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:42:53] "OPTIONS /api/enhance/interview-prep?skill=python HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:42:54] "GET /api/enhance/interview-prep?skill=python HTTP/1.1" 200 -
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\enhance.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\jobs.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\match.py', reloading
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
127.0.0.1 - - [26/Mar/2026 23:53:58] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:53:58] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:57:09] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:57:09] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:57:18] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:57:18] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:57:18] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:57:19] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
 * Detected change in 'c:\\skillmatch ai\\backend\\app.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
127.0.0.1 - - [26/Mar/2026 23:59:46] "GET /main.27752096b251364ca66e.hot-update.json HTTP/1.1" 404 -
127.0.0.1 - - [26/Mar/2026 23:59:49] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:59:49] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:59:49] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:59:49] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:59:53] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:59:53] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:59:56] "OPTIONS /api/enhance/interview-prep?skill=python HTTP/1.1" 200 -
127.0.0.1 - - [26/Mar/2026 23:59:56] "GET /api/enhance/interview-prep?skill=python HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:00:43] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:00:44] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:00:44] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:00:48] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:00:49] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:00:49] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:00:49] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:01:08] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:01:08] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:01:09] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:01:09] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:02:23] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:02:23] "OPTIONS /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:02:23] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:02:23] "GET /api/enhance/interview-prep HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:02:25] "OPTIONS /api/enhance/interview-prep?skill=python HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:02:25] "GET /api/enhance/interview-prep?skill=python HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:03:07] "OPTIONS /api/enhance/interview-evaluate HTTP/1.1" 200 -
127.0.0.1 - - [27/Mar/2026 00:03:07] "POST /api/enhance/interview-evaluate HTTP/1.1" 200 -
 * Detected change in 'c:\\skillmatch ai\\backend\\create_admin.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\seed_users.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\admin.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\auth.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\matcher.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\models.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\parser.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\resume.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\modules\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Scripts\\dumppdf.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Scripts\\pdf2txt.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\threadpoolctl.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\typing_extensions.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\blinker\\base.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\blinker\\_utilities.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\blinker\\__init__.py', reloading
 * Detected change in 'c:\\skillmatch ai\\backend\\venv\\Lib\\site-packages\\bson\\binary.py', reloading
Exception in thread Thread-2 (serve_forever):
Traceback (most recent call last):
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 1045, in _bootstrap_inner
    self.run()
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\threading.py", line 982, in run
    self._target(*self._args, **self._kwargs)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\site-packages\werkzeug\serving.py", line 810, in serve_forever
    super().serve_forever(poll_interval=poll_interval)
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\socketserver.py", line 233, in serve_forever
    ready = selector.select(poll_interval)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 323, in select
    r, w, _ = self._select(self._readers, self._writers, [], timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\Preethu\AppData\Local\Programs\Python\Python311\Lib\selectors.py", line 314, in _select
    r, w, x = select.select(r, w, w, timeout)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OSError: [WinError 10038] An operation was attempted on something that is not a socket
 * Restarting with watchdog (windowsapi)
 * Debugger is active!
 * Debugger PIN: 107-578-024
