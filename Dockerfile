# Use below nginx version
FROM nginx:1.15.2-alpine
# Copy the build folder of the react app
COPY ./build /var/lib/docker/tmp
# Copy the ngnix configrations
COPY deployment/nginx.conf /etc/nginx/nginx.conf
# Expose it on port 80
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]