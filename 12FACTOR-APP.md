12FACTOR APP:

The goal of the twelve-factor framework is to help developers build apps that use an architecture that ensures speed, reliability, agility, portability and ultimately results in a robust and reliable application.

The 12 factors are “a triangulation on ideal practices for app development, paying particular attention to the dynamics of the organic growth of an app over time, the dynamics of collaboration between developers working on the app’s codebase, and avoiding the cost of software erosion,”

the 12 factors are:

1. CODEBASE: One codebase tracked in revision control, many deploys.

	A codebase is any single repo (in a centralized revision control system like Subversion), or any set of repos who share a root commit (in a decentralized revision control system like Git).

There is always a one-to-one correlation between the codebase and the app:

    -If there are multiple codebases, it’s not an app – it’s a distributed system.
	-Multiple apps sharing the same code is a violation of twelve-factor. The solution here is to factor shared code into libraries which can be included through the dependency manager.

![](https://12factor.net/images/codebase-deploys.png)

2. DEPENDENCIES: Explicitly declare and isolate dependencies.

	A twelve-factor app never relies on implicit existence of system-wide packages. It declares all dependencies, completely and exactly, via a dependency declaration manifest.

3. CONFIG: Store config in the environment variables.

	An app’s config is everything that is likely to vary between deploys (staging, production, developer environments, etc). This includes:

    	-Resource handles to the database, Memcached, and other backing services
    	-Credentials to external services such as Amazon S3 or Twitter
    	-Per-deploy values such as the canonical hostname for the deploy

4. Backing Service: Treat backing services as attached resources

	A backing service is any service the app consumes over the network as part of its normal operation. Examples include datastores (such as MySQL or CouchDB), messaging/queueing systems (such as RabbitMQ or Beanstalkd), SMTP services for outbound email (such as Postfix), and caching systems (such as Memcached).
![](https://12factor.net/images/attached-resources.png)

5. Build, release, run: Strictly separate build and run stages.

	The twelve-factor app uses strict separation between the build, release, and run stages. For example, it is impossible to make changes to the code at runtime, since there is no way to propagate those changes back to the build stage.

![](https://12factor.net/images/release.png)

6. PROCESSES: Execute the app as one or more stateless processes

	The app is executed in the execution environment as one or more processes.Twelve-factor processes are stateless and share-nothing. Any data that needs to persist must be stored in a stateful backing service, typically a database.

7. PORT BINDING: Export services via port binding

	The twelve-factor app is completely self-contained and does not rely on runtime injection of a webserver into the execution environment to create a web-facing service. The web app exports HTTP as a service by binding to a port, and listening to requests coming in on that port.

8. CONCURRENCY: Scale out via the process model

	In the twelve-factor app, processes are a first class citizen. Processes in the twelve-factor app take strong cues from the unix process model for running service daemons.
![](https://12factor.net/images/process-types.png)

9. DISPOSABILITY: Maximize robustness with fast startup and graceful shutdown

	The twelve-factor app’s processes are disposable, meaning they can be started or stopped at a moment’s notice. This facilitates fast elastic scaling, rapid deployment of code or config changes, and robustness of production deploys.

10. DEV/PROD PARIY: Keep development, staging, and production as similar as possible.

	The twelve-factor app is designed for continuous deployment by keeping the gap between development and production small. Looking at the three gaps described above:

    Make the time gap small: a developer may write code and have it deployed hours or even just minutes later.
    Make the personnel gap small: developers who wrote code are closely involved in deploying it and watching its behavior in production.

11. LOGS: Treat logs as event streams

	Logs provide visibility into the behavior of a running app. In server-based environments they are commonly written to a file on disk (a “logfile”); but this is only an output format.
	Logs are the stream of aggregated, time-ordered events collected from the output streams of all running processes and backing services. Logs in their raw form are typically a text format with one event per line (though backtraces from exceptions may span multiple lines). Logs have no fixed beginning or end, but flow continuously as long as the app is operating.

12. ADMIN PROCESSES: Run admin/management tasks as one-off processes.

	The process formation is the array of processes that are used to do the app’s regular business (such as handling web requests) as it runs. Separately, developers will often wish to do one-off administrative or maintenance tasks for the app, such as:

    Running database migrations (e.g. manage.py migrate in Django, rake db:migrate in Rails).
    Running a console (also known as a REPL shell) to run arbitrary code or inspect the app’s models against the live database. Most languages provide a REPL by running the interpreter without any arguments (e.g. python or perl) or in some cases have a separate command (e.g. irb for Ruby, rails console for Rails).
    Running one-time scripts committed into the app’s repo (e.g. php scripts/fix_bad_records.php).

