pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''npm install -g angular-cli
npm install
ng build --prod'''
      }
    }
  }
}