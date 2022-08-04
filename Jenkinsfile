pipeline {
    agent any
    environment {
        CI = true
    }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install --force'
            }
        }
        stage('Test application') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build application') {
            steps {
                sh 'npm run build'
            }
    }
}
}
