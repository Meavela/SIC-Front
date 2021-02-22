pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'node --version'
                sh 'npm --version'
                sh 'npm i -g jest'
                sh 'npm i'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm run test'
            }
        }
        stage("SonarQube analysis") {
            steps {
                sh 'sonar-scanner -Dsonar.projectKey=SCI-Front -Dsonar.sources=. -Dsonar.host.url=http://20.56.176.197/ -Dsonar.login=5b76c6b81aaa1b6510d14a1da7ad9639c5e349e5'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }

    // post {
    //     always {
    //         archiveArtifacts artifacts: 'coverage/lcov-report/*', fingerprint: true
    //         archiveArtifacts artifacts: 'test-report.html', fingerprint: true
    //     }
    // }
}