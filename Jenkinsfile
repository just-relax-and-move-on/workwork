pipeline {
    agent any

    environment {
        TZ = 'Asia/Shanghai'
        LANG = 'zh_CN.UTF-8'
        IMAGE_NAME = "llm-infr-front"
        IMAGE_TAG = "latest"
        DOCKER_REGISTRY = 'registry-vpc.cn-hangzhou.aliyuncs.com'
        DOCKER_NAMESPACE = 'ideatech_square'
        DOCKER_IMAGE = 'llm-infr-front'
        DOCKER_TAG = "${BUILD_NUMBER}"
        BUILD_TIMESTAMP = sh(script: "date '+%Y%m%d-%H%M%S'", returnStdout: true).trim()
        VERSION_TAG = "${BUILD_NUMBER}-${BUILD_TIMESTAMP}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Frontend Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: '254c062a-8a49-4112-a64e-d5bb267a73c4', usernameVariable: 'username', passwordVariable: 'password')]) {
                    sh '''
                    docker login ${DOCKER_REGISTRY} -u $username -p $password
                    docker build -f Dockerfile -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                    '''
                }
            }
        }

        stage('Push Frontend Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: '254c062a-8a49-4112-a64e-d5bb267a73c4', usernameVariable: 'username', passwordVariable: 'password')]) {
                    sh '''
                        echo "推送镜像时间: $(date '+%Y-%m-%d %H:%M:%S %Z')"
                        docker login ${DOCKER_REGISTRY} -u $username -p $password
                        docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_REGISTRY}/${DOCKER_NAMESPACE}/${DOCKER_IMAGE}:${DOCKER_TAG}
                        docker push ${DOCKER_REGISTRY}/${DOCKER_NAMESPACE}/${DOCKER_IMAGE}:${DOCKER_TAG}
                    '''
                }
            }
        }

        stage('Deploy') {
            agent {
                label 'ezh_publish'
            }
            steps {
                withCredentials([usernamePassword(credentialsId: '254c062a-8a49-4112-a64e-d5bb267a73c4', usernameVariable: 'username', passwordVariable: 'password')]) {
                    sh '''
                        echo "部署开始时间: $(date '+%Y-%m-%d %H:%M:%S %Z')"
                        docker login ${DOCKER_REGISTRY} -u $username -p $password
                        docker pull ${DOCKER_REGISTRY}/${DOCKER_NAMESPACE}/${DOCKER_IMAGE}:${DOCKER_TAG}
                        docker stop llm-infr-front || true
                        docker rm llm-infr-front || true
                        docker run -d \
                            --name llm-infr-front \
                            -p 3000:80 \
                            -e TZ=Asia/Shanghai \
                            -e LANG=zh_CN.UTF-8 \
                            -e API_HOST=172.16.143.10 \
                            -e API_PORT=9000 \
                            ${DOCKER_REGISTRY}/${DOCKER_NAMESPACE}/${DOCKER_IMAGE}:${DOCKER_TAG}
                        echo "部署完成时间: $(date '+%Y-%m-%d %H:%M:%S %Z')"
                        echo "容器状态检查..."
                        sleep 10
                        docker ps | grep llm-infr-front || echo "警告: 容器可能未正常启动"
                    '''
                }
            }
        }
    }

    post {
        always {
            script {
                def endTime = sh(script: "date '+%Y-%m-%d %H:%M:%S %Z'", returnStdout: true).trim()
                echo "构建流水线结束时间: ${endTime}"
                sh "docker system prune -f"
            }
            cleanWs()
        }
    }
} 