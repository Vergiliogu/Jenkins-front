pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        cmd 'npm install'
        cmd 'npm build'
      }
    }
    
    stage('test') {
      steps {
        cmd 'npm run test'
      }
    }
    
    stage ('deploy') {
      steps {
        echo 'deployed'
      }
    }
  }
}
