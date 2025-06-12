
install:
	npm install

run:
	npm run dev
 
format:
	npm run lint && npx prettier . --write

seed:
	npm run seed