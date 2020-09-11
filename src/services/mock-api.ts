class MockApiService {
  getQuestions = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.mockData)
      }, 1200)
    })
  }

  mockData = [
    { id: 1, text: 'Is Vue simpler than React ?' },
    { id: 2, text: 'Does your dog bark when you define global variables ?' },
    { id: 3, text: 'Have you ever tried Rust ?' },
    { id: 4, text: 'Are my questions annoying you ?' },
    { id: 5, text: 'Do you want to subscribe my telegram channel ?' },
  ];
}

export default MockApiService;