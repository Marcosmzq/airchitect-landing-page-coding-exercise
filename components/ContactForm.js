const ContactForm = () => {
  return (
    <form onSubmit="#" className="my-8">
      <input placeholder="Name" className="md:w-1/2 form-input customInput" />
      <input placeholder="Email" className="md:w-1/2 form-input customInput" />
      <input
        placeholder="Subject"
        className="md:w-1/2 form-input customInput"
      />
      <textarea placeholder="Message" className="customInput form-input" />
      <div className="flex justify-end">
        <button className="btn bg-rose text-white font-bold text-lg">
          Send message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
