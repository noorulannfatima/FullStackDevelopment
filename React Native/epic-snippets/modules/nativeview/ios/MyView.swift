import SwiftUI

struct MyView: View {
    @State private var inputText = ""
    @State private var items = ["Item 1", "Item 2", "Item 3"]
    @State private var counter = 0
    
    var body: some View {
        VStack(spacing: 20) {
            Text("Welcome to My App")
                .font(.title)
                .fontWeight(.bold)
            
            TextField("Enter text here", text: $inputText)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding(.horizontal)
            
            Button(action: {
                if !inputText.isEmpty {
                    items.append(inputText)
                    inputText = ""
                }
            }) {
                Text("Add Item")
                    .foregroundColor(.white)
                    .padding()
                    .background(Color.blue)
                    .cornerRadius(10)
            }
            
            List {
                ForEach(items, id: \.self) { item in
                    Text(item)
                }
                .onDelete(perform: deleteItem)
            }
            
            HStack(spacing: 20) {
                Text("Counter: \(counter)")
                    .font(.headline)
                
                Button(action: {
                    counter += 1
                }) {
                    Text("Increment")
                        .foregroundColor(.white)
                        .padding()
                        .background(Color.green)
                        .cornerRadius(10)
                }
            }
        }
        .padding()
    }
    
    private func deleteItem(at offsets: IndexSet) {
        items.remove(atOffsets: offsets)
    }
}

#Preview {
    MyView()
}
