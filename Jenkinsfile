pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "shivakrishnaanamala/my-first-image"
        DOCKER_TAG = "latest"
        EC2_IP = "13.127.203.108"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'shivakrishnaanamala',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    sh '''
                    echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $DOCKER_IMAGE:$DOCKER_TAG'
            }
        }

        stage('Deploy to EC2') {
    steps {
        sshagent(['ec2-ssh-key']) {
            sh """
ssh -o StrictHostKeyChecking=no ubuntu@${EC2_IP} << EOF
docker pull ${DOCKER_IMAGE}:${DOCKER_TAG}
docker stop my-app || true
docker rm my-app || true
docker run -d -p 80:3000 --name my-app ${DOCKER_IMAGE}:${DOCKER_TAG}
EOF
"""
        }
    }
}
    }
}
