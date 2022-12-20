pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'npm install'
        sh 'npm build'
      }
    }
    
    stage('test') {
      steps {
        sh 'npm run test'
      }
    }
    
    stage ('deploy') {
      steps {
        echo 'deployed'
      }
    }
  }
}
