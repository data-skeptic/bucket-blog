# Bucket Blog

A general purpose blogging solution with the following features:

- [X] Uses S3 as a primary data store
- [X] Is totally serverless
- [X] Can attach to a github repository with a webhook so that changes on `master` of the repo automatically update in S3, therefore going live on the blog
- [X] Supports markdown blog posts and renders them to S3 as limited HTML
- [ ] Supports Jupyter Notebooks
- [ ] Supports R markdown
- [ ] Extensible to support other file types which are converted to HTML for the blog
- [X] Handles images as relative paths in repo, absolute URLs, or generated images in R/Python
- [ ] Charting support via Vega
- [ ] Provides advanced image support
- [ ] Includes pre-made React Components for Reach developers to trivially and seamlessly include Bucket Blog in their codebase
- [ ] Includes RSS support
- [ ] Has password protection for specific pages
