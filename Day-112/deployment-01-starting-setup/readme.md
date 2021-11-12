# Deploying app to digital ocean
 - docker build -t deployment-practice .
 - docker tag deployment-practice lalitkushdev/deployment-practice
 - docker login
 - docker push lalitkushdev/deployment-practice
