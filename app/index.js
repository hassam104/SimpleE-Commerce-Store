import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

const App = () => {
  const [blogs, setBlogs] = useState([]); // State to store blog posts

  // Fetch data from blogs.json when the app loads
  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setBlogs(data)) // Update state with fetched data
      .catch((error) => console.error("Error fetching blogs:", error));
  });

  return (
    <ScrollView>
      <Text style={{ textAlign: "center", fontSize: "40px" }}>
        Latest Blogs
      </Text>
      <View>
        {blogs.map((blog) => (
          <View key={blog.id} style={{ marginBottom: "-30px" }}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "fantasy",
                fontSize: "15px",
              }}
            >
              {blog.title}
            </Text>
            <img
              style={{
                marginLeft: "450px",
                width: "50%",
                height: "60%",
                borderRadius: "10px",
              }}
              src={blog.image}
            />
            <View>{blog.description}</View>
            <View style={{ fontSize: "20px" }}>Write By:{blog.author}</View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default App;
