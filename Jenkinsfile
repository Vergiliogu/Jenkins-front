pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        bat 'npm install'
        bat 'npm build'
      }
    }
    
    stage('test') {
      steps {
        bat 'npm run test'
      }
    }
    
    stage ('deploy') {
      steps {
        echo 'deployed'
      }
    }
  }
}
