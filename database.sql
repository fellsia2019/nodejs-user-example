create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(24) NOT NULL,
    surname VARCHAR(24) NOT NULL
);

create TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    content text NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person(id)
);

