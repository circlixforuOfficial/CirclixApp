
FROM eclipse-temurin:21-jre-alpine

ENV APP_HOME=/app
WORKDIR $APP_HOME

COPY target/rating-1.0.0..jar app.jar

EXPOSE 8086

ENTRYPOINT ["java", "-jar", "app.jar"]
