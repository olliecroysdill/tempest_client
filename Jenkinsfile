pipeline {
    agent any
    environment {
        CI = true
    }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
