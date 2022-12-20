pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo 'Build was mounted';
      }
    }
    
    stage('test') {
      steps {
        echo 'tests passed'
      }
    }
    
    stage ('deploy') {
      steps {
        echo 'deployed'
      }
    }
  }
}
