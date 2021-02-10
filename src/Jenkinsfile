pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'node --version'
                sh 'npm --version'
                /* sh 'npm i'*/
            }
        }
        stage('Lint') {
            steps {
                echo 'Linting..'
                sh 'npm run lint'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'coverage/lcov-report/*', fingerprint: true
            archiveArtifacts artifacts: 'test-report.html', fingerprint: true
        }
    }
}