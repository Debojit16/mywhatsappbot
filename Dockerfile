FROM fusuf/whatsasena:latest

RUN git clone https://github.com/debojit16mitra/mywhatsappbot
WORKDIR /root/mywhatsappbot/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
